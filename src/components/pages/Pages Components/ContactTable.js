import React from "react";
import Table from "react-bootstrap/Table";
import './ContactTable.css'

export default function ContactTable() {
  return (
    <div className="contact-table">
    <Table striped>
      <thead>
        <tr>
          <th>Contact Name</th>
          <th>Contact Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Paw Prints Helpline</td>
          
          <td>+91 9861263770, +91 7060236481, +91 9453012217</td>
          <td>pawprints@gmail.com, @pawprintshelp@gmail.com</td>
        </tr>
        <tr>
         
          <td >PETA INDIA( EMERGENCY CARE )</td>
          <td>+91 98201 22602</td>
          <td>info@petaindia.org</td>
        </tr>
        <tr>
         
          <td>PAWS</td>
          <td>+91 9820161114, +91 9920777536 </td>
          <td>paws@pawsindia.org</td>
        </tr>

        <tr>
         
          <td>Odisha State Animal Helpline</td>
          <td>1962,  155333  </td>
          <td>help@odishaanimal.org</td>
        </tr>
      </tbody>
    </Table>
    </div>
    
    

  );
}
