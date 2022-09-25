/**
 * 
 */
package com.Minorproject.NGOforPet.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Minorproject.NGOforPet.entities.registration_members;

/**
 * @author KIIT
 *
 */
public interface Memberdao extends JpaRepository<registration_members, Integer>{
  
}
