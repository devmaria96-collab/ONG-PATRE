package br.org.patre.repository;

import br.org.patre.entity.AdoptionRequest;
import br.org.patre.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdoptionRequestRepository extends JpaRepository<AdoptionRequest, Long> {

    List<AdoptionRequest> findByUserOrderByCreatedAtDesc(User user);
}
