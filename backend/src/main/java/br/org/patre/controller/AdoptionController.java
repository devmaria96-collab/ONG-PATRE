package br.org.patre.controller;

import br.org.patre.dto.adoption.AdoptionRequestDto;
import br.org.patre.dto.adoption.AdoptionResponse;
import br.org.patre.service.AdoptionService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/adoptions")
public class AdoptionController {

    private final AdoptionService adoptionService;

    public AdoptionController(AdoptionService adoptionService) {
        this.adoptionService = adoptionService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AdoptionResponse create(Authentication authentication, @Valid @RequestBody AdoptionRequestDto request) {
        return adoptionService.create(authentication.getName(), request);
    }

    @GetMapping
    public List<AdoptionResponse> list(Authentication authentication) {
        return adoptionService.list(authentication.getName());
    }

    @GetMapping("/{id}")
    public AdoptionResponse findById(Authentication authentication, @PathVariable Long id) {
        return adoptionService.findById(authentication.getName(), id);
    }
}
