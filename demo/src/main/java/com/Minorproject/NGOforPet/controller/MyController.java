package com.Minorproject.NGOforPet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Minorproject.NGOforPet.services.NGOService;
import com.Minorproject.NGOforPet.entities.*;

@RestController
public class MyController {
   
	@Autowired
	private NGOService service;
	
	@GetMapping("/home")
	public String home() {
	   return "THis is homepage";
   }
	
   @GetMapping("/getPets")
    public List<registration_members> getPets(){
    	return this.service.getPets();
    }
    @GetMapping("/getPetDetails/{city}")
    public registration_members getPet(@PathVariable String city) {
    	return this.service.getPetDetails(city);
    }
    @PostMapping(path="/addmember",consumes="application/json")
    public ResponseEntity addMembers(@RequestBody registration_members member) {
    	 try {
    		 this.service.addMembers(member);
    		 return new ResponseEntity<>(HttpStatus.OK);
    	 } catch(Exception e) {
    		 return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    	 }
    }
    @PostMapping(path="/payments")
    public ResponseEntity addPayments(@RequestBody payment_details payment) {
    	 try {
    		 this.service.addPayment_Details(payment);
    		 return new ResponseEntity<>(HttpStatus.OK);
    	 } catch(Exception e) {
    		 return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    	 }
    }
}
