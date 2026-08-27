package br.org.patre;

import br.org.patre.domain.Role;
import br.org.patre.dto.auth.AuthResponse;
import br.org.patre.dto.auth.LoginRequest;
import br.org.patre.dto.auth.RegisterRequest;
import br.org.patre.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class AuthAndAnimalApiTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserRepository userRepository;

    @Test
    void registerLoginAndListAnimals() throws Exception {
        RegisterRequest register = new RegisterRequest("Maria Silva", "maria.teste@patre.org", "senha123");
        MvcResult registerResult = mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(register)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.token").isNotEmpty())
                .andExpect(jsonPath("$.user.email").value("maria.teste@patre.org"))
                .andExpect(jsonPath("$.user.role").value("USER"))
                .andReturn();

        AuthResponse registered = objectMapper.readValue(registerResult.getResponse().getContentAsString(), AuthResponse.class);
        assertThat(registered.user().id()).isNotNull();
        assertThat(userRepository.findByEmailIgnoreCase("maria.teste@patre.org").orElseThrow().getRole()).isEqualTo(Role.USER);

        mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(register)))
                .andExpect(status().isConflict());

        LoginRequest login = new LoginRequest("maria.teste@patre.org", "senha123");
        MvcResult loginResult = mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(login)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").isNotEmpty())
                .andReturn();

        AuthResponse auth = objectMapper.readValue(loginResult.getResponse().getContentAsString(), AuthResponse.class);

        mockMvc.perform(get("/api/animals"))
                .andExpect(status().isUnauthorized());

        mockMvc.perform(get("/api/animals")
                        .header("Authorization", "Bearer " + auth.token()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Luna"))
                .andExpect(jsonPath("$[0].status").value("AVAILABLE"));

        mockMvc.perform(get("/api/animals/1")
                        .header("Authorization", "Bearer " + auth.token()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.breed").value("Labrador"));

        mockMvc.perform(post("/api/animals")
                        .header("Authorization", "Bearer " + auth.token())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "name": "Nico",
                                  "species": "DOG",
                                  "breed": "SRD",
                                  "age": "1 ano",
                                  "size": "SMALL",
                                  "gender": "MALE",
                                  "description": "Cãozinho resgatado.",
                                  "location": "São Paulo, SP"
                                }
                                """))
                .andExpect(status().isForbidden());
    }

    @Test
    void loginWithAdminCanCreateAnimal() throws Exception {
        LoginRequest login = new LoginRequest("admin@patre.org", "admin123");
        MvcResult loginResult = mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(login)))
                .andExpect(status().isOk())
                .andReturn();

        AuthResponse auth = objectMapper.readValue(loginResult.getResponse().getContentAsString(), AuthResponse.class);

        mockMvc.perform(post("/api/animals")
                        .header("Authorization", "Bearer " + auth.token())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "name": "Nico",
                                  "species": "DOG",
                                  "breed": "SRD",
                                  "age": "1 ano",
                                  "size": "SMALL",
                                  "gender": "MALE",
                                  "description": "Cãozinho resgatado.",
                                  "location": "São Paulo, SP",
                                  "status": "TREATMENT"
                                }
                                """))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("Nico"))
                .andExpect(jsonPath("$.status").value("TREATMENT"));
    }
}
