package com.narenkg.hecko.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.common.ReferralCode;

@Repository
public interface ReferralCodeRepository extends JpaRepository<ReferralCode, Long> {
	
	ReferralCode findByCode(String code);

}
