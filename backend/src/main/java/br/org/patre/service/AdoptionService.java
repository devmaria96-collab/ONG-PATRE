package br.org.patre.service;

import br.org.patre.domain.Role;
import br.org.patre.dto.adoption.AdoptionRequestDto;
import br.org.patre.dto.adoption.AdoptionResponse;
import br.org.patre.entity.AdoptionRequest;
import br.org.patre.entity.Animal;
import br.org.patre.entity.User;
import br.org.patre.exception.ApiException;
import br.org.patre.repository.AdoptionRequestRepository;
import br.org.patre.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AdoptionService {

    private final AdoptionRequestRepository adoptionRequestRepository;
    private final UserRepository userRepository;
    private final AnimalService animalService;

    public AdoptionService(
            AdoptionRequestRepository adoptionRequestRepository,
            UserRepository userRepository,
            AnimalService animalService
    ) {
        this.adoptionRequestRepository = adoptionRequestRepository;
        this.userRepository = userRepository;
        this.animalService = animalService;
    }

    @Transactional
    public AdoptionResponse create(String email, AdoptionRequestDto request) {
        User user = getUser(email);
        Animal animal = animalService.getAnimal(request.animalId());

        AdoptionRequest adoption = new AdoptionRequest();
        adoption.setUser(user);
        adoption.setAnimal(animal);
        adoption.setApplicantName(request.name().trim());
        adoption.setEmail(request.email().trim().toLowerCase());
        adoption.setPhone(request.phone().trim());
        adoption.setCpf(request.cpf());
        adoption.setAddress(request.address());
        adoption.setCity(request.city());
        adoption.setState(request.state());
        adoption.setZipCode(request.zipCode());
        adoption.setHouseType(request.houseType());
        adoption.setHasYard(request.hasYard());
        adoption.setHasOtherPets(request.hasOtherPets());
        adoption.setPetExperience(request.petExperience());
        adoption.setReason(request.reason());
        adoption.setAvailability(request.availability());
        adoption.setAgreedToTerms(request.agreeTerms());

        return toResponse(adoptionRequestRepository.save(adoption));
    }

    @Transactional(readOnly = true)
    public List<AdoptionResponse> list(String email) {
        User user = getUser(email);
        if (user.getRole() == Role.ADMIN) {
            return adoptionRequestRepository.findAll().stream().map(this::toResponse).toList();
        }
        return adoptionRequestRepository.findByUserOrderByCreatedAtDesc(user).stream().map(this::toResponse).toList();
    }

    @Transactional(readOnly = true)
    public AdoptionResponse findById(String email, Long id) {
        User user = getUser(email);
        AdoptionRequest adoption = adoptionRequestRepository.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Solicitação de adoção não encontrada."));

        if (user.getRole() != Role.ADMIN && !adoption.getUser().getId().equals(user.getId())) {
            throw new ApiException(HttpStatus.FORBIDDEN, "Você não tem permissão para esta ação.");
        }
        return toResponse(adoption);
    }

    private User getUser(String email) {
        return userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new ApiException(HttpStatus.UNAUTHORIZED, "Acesso não autorizado."));
    }

    private AdoptionResponse toResponse(AdoptionRequest adoption) {
        return new AdoptionResponse(
                adoption.getId(),
                adoption.getUser().getId(),
                adoption.getAnimal().getId(),
                adoption.getAnimal().getName(),
                adoption.getStatus(),
                adoption.getCreatedAt(),
                adoption.getApplicantName(),
                adoption.getEmail(),
                adoption.getPhone(),
                adoption.getCpf(),
                adoption.getAddress(),
                adoption.getCity(),
                adoption.getState(),
                adoption.getZipCode(),
                adoption.getHouseType(),
                adoption.isHasYard(),
                adoption.isHasOtherPets(),
                adoption.getPetExperience(),
                adoption.getReason(),
                adoption.getAvailability(),
                adoption.isAgreedToTerms()
        );
    }
}
