package br.org.patre.config;

import br.org.patre.domain.AnimalStatus;
import br.org.patre.domain.Gender;
import br.org.patre.domain.Role;
import br.org.patre.domain.AnimalSize;
import br.org.patre.domain.Species;
import br.org.patre.entity.Animal;
import br.org.patre.entity.User;
import br.org.patre.repository.AnimalRepository;
import br.org.patre.repository.UserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final AnimalRepository animalRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.admin.email}")
    private String adminEmail;

    @Value("${app.admin.password}")
    private String adminPassword;

    public DataSeeder(
            UserRepository userRepository,
            AnimalRepository animalRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.userRepository = userRepository;
        this.animalRepository = animalRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        seedAdmin();
        seedAnimals();
    }

    private void seedAdmin() {
        if (userRepository.existsByEmailIgnoreCase(adminEmail)) {
            return;
        }
        User admin = new User();
        admin.setName("Administrador PATRE");
        admin.setEmail(adminEmail.trim().toLowerCase());
        admin.setPassword(passwordEncoder.encode(adminPassword));
        admin.setRole(Role.ADMIN);
        userRepository.save(admin);
    }

    private void seedAnimals() {
        if (animalRepository.count() > 0) {
            return;
        }

        animalRepository.save(animal(
                "Luna",
                Species.DOG,
                "Labrador",
                "2 anos",
                AnimalSize.LARGE,
                Gender.FEMALE,
                "🐕",
                "Luna é uma cadela muito carinhosa e brincalhona.",
                "Luna é uma cadela muito carinhosa e brincalhona. Ela adora brincar com crianças e outros cães. Foi resgatada quando ainda era filhote e agora está pronta para encontrar uma família amorosa.",
                "São Paulo, SP",
                "Vacinada, castrada, vermifugada",
                List.of("Carinhosa", "Brincalhona", "Sociável", "Obediente"),
                "Luna foi encontrada abandonada em uma caixa de papelão quando tinha apenas 2 meses. Desde então, tem sido cuidada com muito amor pela nossa equipe.",
                "25kg",
                List.of("🐕", "🐕‍🦺", "🦮")
        ));
        animalRepository.save(animal(
                "Mimi",
                Species.CAT,
                "SRD",
                "1 ano",
                AnimalSize.SMALL,
                Gender.FEMALE,
                "🐱",
                "Mimi é uma gatinha dócil e independente.",
                "Mimi é uma gatinha dócil e independente. Perfeita para quem busca um companheiro tranquilo.",
                "São Paulo, SP",
                "Vacinada, castrada, vermifugada",
                List.of("Dócil", "Independente", "Carinhosa", "Calma"),
                "Mimi foi resgatada de uma colônia de gatos de rua. É muito carinhosa e se adapta bem a ambientes internos.",
                "3kg",
                List.of("🐱", "😺", "😸")
        ));
        animalRepository.save(animal(
                "Thor",
                Species.DOG,
                "Pastor Alemão",
                "3 anos",
                AnimalSize.LARGE,
                Gender.MALE,
                "🐕‍🦺",
                "Thor é um cão protetor e leal.",
                "Thor é um cão protetor e leal. Ideal para quem busca um companheiro fiel.",
                "São Paulo, SP",
                "Vacinado, castrado, vermifugado",
                List.of("Protetor", "Leal", "Inteligente", "Corajoso"),
                "Thor foi abandonado por sua família anterior, mas não perdeu a fé nos humanos. É um cão muito especial.",
                "35kg",
                List.of("🐕‍🦺", "🐕", "🦮")
        ));
        animalRepository.save(animal(
                "Bella",
                Species.DOG,
                "Golden Retriever",
                "4 anos",
                AnimalSize.LARGE,
                Gender.FEMALE,
                "🦮",
                "Bella é muito amigável e adora crianças.",
                "Bella é muito amigável e adora crianças. Uma companheira perfeita para famílias.",
                "São Paulo, SP",
                "Vacinada, castrada, vermifugada",
                List.of("Amigável", "Paciente", "Brincalhona", "Gentil"),
                "Bella chegou até nós após seu dono idoso não conseguir mais cuidar dela. É uma cadelinha muito especial.",
                "28kg",
                List.of("🦮", "🐕", "🐕‍🦺")
        ));
    }

    private Animal animal(
            String name,
            Species species,
            String breed,
            String age,
            AnimalSize size,
            Gender gender,
            String image,
            String summary,
            String description,
            String location,
            String health,
            List<String> personality,
            String story,
            String weight,
            List<String> photos
    ) {
        Animal animal = new Animal();
        animal.setName(name);
        animal.setSpecies(species);
        animal.setBreed(breed);
        animal.setAge(age);
        animal.setSize(size);
        animal.setGender(gender);
        animal.setImage(image);
        animal.setSummary(summary);
        animal.setDescription(description);
        animal.setLocation(location);
        animal.setHealth(health);
        animal.setPersonality(personality);
        animal.setStory(story);
        animal.setWeight(weight);
        animal.setPhotos(photos);
        animal.setStatus(AnimalStatus.AVAILABLE);
        return animal;
    }
}
