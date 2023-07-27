package com.narenkg.hecko.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.Category;
import com.narenkg.hecko.models.ReferralCode;
import com.narenkg.hecko.models.Referrals;
import com.narenkg.hecko.models.Role;
import com.narenkg.hecko.models.enums.ERole;

@Repository
public interface ReferralCodeRepository extends JpaRepository<ReferralCode, Long> {
	
	ReferralCode findByCode(String code);

}
