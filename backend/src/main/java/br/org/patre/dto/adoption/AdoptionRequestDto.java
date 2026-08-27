package br.org.patre.dto.adoption;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record AdoptionRequestDto(
        @NotNull(message = "Informe o animal.")
        Long animalId,

        @NotBlank(message = "Informe seu nome completo.")
        @Size(max = 120)
        String name,

        @NotBlank(message = "Informe seu e-mail.")
        @Email(message = "Digite um e-mail válido.")
        String email,

        @NotBlank(message = "Informe seu telefone.")
        @Size(max = 30)
        String phone,

        @Size(max = 20)
        String cpf,

        @Size(max = 255)
        String address,

        @Size(max = 80)
        String city,

        @Size(max = 2)
        String state,

        @Size(max = 12)
        String zipCode,

        @Size(max = 80)
        String houseType,

        boolean hasYard,

        boolean hasOtherPets,

        @Size(max = 2000)
        String petExperience,

        @Size(max = 2000)
        String reason,

        @Size(max = 255)
        String availability,

        @AssertTrue(message = "Você deve concordar com os termos de adoção.")
        boolean agreeTerms
) {
}
