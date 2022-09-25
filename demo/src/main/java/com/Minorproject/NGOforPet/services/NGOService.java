package com.Minorproject.NGOforPet.services;

import java.util.List;

import com.Minorproject.NGOforPet.entities.payment_details;
import com.Minorproject.NGOforPet.entities.registration_members;

public interface NGOService {
   public List<registration_members> getPets();
   public registration_members getPetDetails(String city);
  // public registration_members addMembers(registration_members members);
   public String addMembers(registration_members members);
   public String addPayment_Details(payment_details paymentdetails);
} 
