package br.org.patre.service;

import br.org.patre.domain.AnimalStatus;
import br.org.patre.dto.animal.AnimalRequest;
import br.org.patre.dto.animal.AnimalResponse;
import br.org.patre.entity.Animal;
import br.org.patre.exception.ApiException;
import br.org.patre.repository.AnimalRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnimalService {

    private final AnimalRepository animalRepository;

    public AnimalService(AnimalRepository animalRepository) {
        this.animalRepository = animalRepository;
    }

    @Transactional(readOnly = true)
    public List<AnimalResponse> findAll() {
        return animalRepository.findAll().stream().map(this::toResponse).toList();
    }

    @Transactional(readOnly = true)
    public AnimalResponse findById(Long id) {
        return toResponse(getAnimal(id));
    }

    @Transactional
    public AnimalResponse create(AnimalRequest request) {
        Animal animal = new Animal();
        apply(animal, request);
        return toResponse(animalRepository.save(animal));
    }

    @Transactional
    public AnimalResponse update(Long id, AnimalRequest request) {
        Animal animal = getAnimal(id);
        apply(animal, request);
        return toResponse(animalRepository.save(animal));
    }

    @Transactional
    public void delete(Long id) {
        Animal animal = getAnimal(id);
        animalRepository.delete(animal);
    }

    public Animal getAnimal(Long id) {
        return animalRepository.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Animal não encontrado."));
    }

    private void apply(Animal animal, AnimalRequest request) {
        animal.setName(request.name().trim());
        animal.setSpecies(request.species());
        animal.setBreed(request.breed().trim());
        animal.setAge(request.age().trim());
        animal.setSize(request.size());
        animal.setGender(request.gender());
        animal.setImage(request.image());
        animal.setSummary(request.summary());
        animal.setDescription(request.description().trim());
        animal.setLocation(request.location().trim());
        animal.setHealth(request.health());
        animal.setPersonality(request.personality());
        animal.setStory(request.story());
        animal.setWeight(request.weight());
        animal.setPhotos(request.photos());
        animal.setStatus(request.status() != null ? request.status() : AnimalStatus.AVAILABLE);
    }

    private AnimalResponse toResponse(Animal animal) {
        return new AnimalResponse(
                animal.getId(),
                animal.getName(),
                animal.getSpecies(),
                animal.getBreed(),
                animal.getAge(),
                animal.getSize(),
                animal.getGender(),
                animal.getImage(),
                animal.getSummary(),
                animal.getDescription(),
                animal.getLocation(),
                animal.getHealth(),
                new ArrayList<>(animal.getPersonality()),
                animal.getStory(),
                animal.getWeight(),
                new ArrayList<>(animal.getPhotos()),
                animal.getStatus()
        );
    }
}
