package br.org.patre.dto.adoption;

import br.org.patre.domain.AdoptionStatus;

import java.time.Instant;

public record AdoptionResponse(
        Long id,
        Long userId,
        Long animalId,
        String animalName,
        AdoptionStatus status,
        Instant createdAt,
        String applicantName,
        String email,
        String phone,
        String cpf,
        String address,
        String city,
        String state,
        String zipCode,
        String houseType,
        boolean hasYard,
        boolean hasOtherPets,
        String petExperience,
        String reason,
        String availability,
        boolean agreedToTerms
) {
}
