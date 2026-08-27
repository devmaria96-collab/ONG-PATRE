package br.org.patre.dto.animal;

import br.org.patre.domain.AnimalStatus;
import br.org.patre.domain.Gender;
import br.org.patre.domain.AnimalSize;
import br.org.patre.domain.Species;

import java.util.List;

public record AnimalResponse(
        Long id,
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
        List<String> photos,
        AnimalStatus status
) {
}
