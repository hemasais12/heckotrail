package com.narenkg.hecko.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.common.Referrals;

@Repository
public interface ReferralsRepository extends JpaRepository<Referrals, Long> {

}
