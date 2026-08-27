package br.org.patre.dto.animal;

import br.org.patre.domain.AnimalStatus;
import br.org.patre.domain.Gender;
import br.org.patre.domain.AnimalSize;
import br.org.patre.domain.Species;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.List;

public record AnimalRequest(
        @NotBlank(message = "Informe o nome do animal.")
        @Size(max = 80)
        String name,

        @NotNull(message = "Informe a espécie.")
        Species species,

        @NotBlank(message = "Informe a raça.")
        @Size(max = 80)
        String breed,

        @NotBlank(message = "Informe a idade.")
        @Size(max = 40)
        String age,

        @NotNull(message = "Informe o porte.")
        AnimalSize size,

        @NotNull(message = "Informe o sexo.")
        Gender gender,

        @Size(max = 255)
        String image,

        @Size(max = 255)
        String summary,

        @NotBlank(message = "Informe a descrição.")
        @Size(max = 2000)
        String description,

        @NotBlank(message = "Informe a localização.")
        @Size(max = 120)
        String location,

        @Size(max = 255)
        String health,

        List<String> personality,

        @Size(max = 2000)
        String story,

        @Size(max = 40)
        String weight,

        List<String> photos,

        AnimalStatus status
) {
}
