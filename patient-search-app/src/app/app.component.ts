import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Patient {
  id: number;
  name: string;
  dob: string;
  sex: string;
  residence: string;
  mrn: string;
  idNumber: string;
  lastFourSSN: string;
  phoneNumber: string;
  emailAddress: string;
  hospital: string;
  dept: string;
  physician: string;
  conditions: string;
  nextAppointment: string;
}

interface SearchForm {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  endDate: string;
  // Advanced search fields
  mrn: string;
  idNumber: string;
  lastFourSSN: string;
  phoneNumber: string;
  emailAddress: string;
  sex: string;
  hospital: string;
  dept: string;
  physician: string;
  conditions: string;
  residence: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'patient-search-app';
  activeTab = 'today';
  searchTab = 'basic'; // Track which search tab is active
  
  searchForm: SearchForm = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    endDate: '',
    // Advanced search fields
    mrn: '',
    idNumber: '',
    lastFourSSN: '',
    phoneNumber: '',
    emailAddress: '',
    sex: '',
    hospital: '',
    dept: '',
    physician: '',
    conditions: '',
    residence: ''
  };

  // All patients data
  allPatients: Patient[] = [
    {
      id: 1,
      name: 'Ashley Citarella',
      dob: '07/02/1958',
      sex: 'Female',
      residence: 'Boston, MA',
      mrn: 'YTK12345678',
      idNumber: 'NHL12345678',
      lastFourSSN: '0000',
      phoneNumber: '(000)-000-0000',
      emailAddress: 'ashcitarella@email.com',
      hospital: 'Massachusetts Medical Group',
      dept: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      conditions: 'COPD, CHF, Diabetes (Type II)',
      nextAppointment: 'Today 9:00 am'
    },
    {
      id: 2,
      name: 'Albert Johnson',
      dob: '01/15/1952',
      sex: 'Male',
      residence: 'Waltham, MA',
      mrn: 'YTK12343675',
      idNumber: 'NHL12345678',
      lastFourSSN: '1111',
      phoneNumber: '(111)-111-1111',
      emailAddress: 'ajohnson1952@email.com',
      hospital: 'Massachusetts Medical Group',
      dept: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      conditions: 'CHF',
      nextAppointment: 'Today 10:00 am'
    },
    {
      id: 3,
      name: 'Leslie Isabelle Wang',
      dob: '03/12/1985',
      sex: 'Female',
      residence: 'Mouselookmeguntic, ME',
      mrn: 'YTK12343675',
      idNumber: 'NHL12345678',
      lastFourSSN: '2222',
      phoneNumber: '(222)-222-2222',
      emailAddress: 'leslie.isabelle.wang@email.com',
      hospital: 'Massachusetts Medical Group',
      dept: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      conditions: 'CHF',
      nextAppointment: 'Today 11:00 am'
    },
    {
      id: 4,
      name: 'Adela BaÅ¡iÄ‡',
      dob: '03/12/1950',
      sex: 'Female',
      residence: 'Boston, MA',
      mrn: 'YTK12343675',
      idNumber: 'NHL12345678',
      lastFourSSN: '3333',
      phoneNumber: '(333)-333-3333',
      emailAddress: 'adelabasic@email.com',
      hospital: 'Massachusetts Medical Group',
      dept: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      conditions: 'CHF',
      nextAppointment: 'Today 1:30 pm'
    },
    {
      id: 5,
      name: 'Reza Saatchi',
      dob: '03/12/1957',
      sex: 'Male',
      residence: 'Boston, MA',
      mrn: 'YTK12343675',
      idNumber: 'NHL12345678',
      lastFourSSN: '4444',
      phoneNumber: '(444)-444-4444',
      emailAddress: 'reza.saatchi@email.com',
      hospital: 'Massachusetts Medical Group',
      dept: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      conditions: 'CHF',
      nextAppointment: 'Today 2:30 pm'
    },
    {
      id: 6,
      name: 'Arjun Chandrasekar',
      dob: '03/12/1958',
      sex: 'Male',
      residence: 'New York City, NY',
      mrn: 'YTK12343675',
      idNumber: 'NHL12345678',
      lastFourSSN: '5555',
      phoneNumber: '(555)-555-5555',
      emailAddress: 'arjunchandrase@email.com',
      hospital: 'Massachusetts Medical Group',
      dept: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      conditions: 'CHF',
      nextAppointment: 'Today 3:30 pm'
    }
  ];

  // Filtered patients that will be displayed
  patients: Patient[] = [];

  constructor() {
    // Initially show all patients (or today's patients)
    this.patients = this.allPatients;
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    if (tab === 'today') {
      this.patients = this.allPatients;
    } else if (tab === 'results') {
      this.searchPatients();
    }
  }

  setSearchTab(tab: string): void {
    this.searchTab = tab;
  }

  searchPatients(): void {
    console.log('Searching patients with:', this.searchForm);
    
    let filteredPatients = this.allPatients;

    // Basic search filters
    if (this.searchForm.firstName?.trim()) {
      filteredPatients = filteredPatients.filter(patient => {
        const patientFirstName = patient.name.split(' ')[0].toLowerCase();
        return patientFirstName.includes(this.searchForm.firstName.toLowerCase().trim());
      });
    }

    if (this.searchForm.lastName?.trim()) {
      filteredPatients = filteredPatients.filter(patient => {
        const nameParts = patient.name.split(' ');
        const patientLastName = nameParts[nameParts.length - 1].toLowerCase();
        return patientLastName.includes(this.searchForm.lastName.toLowerCase().trim());
      });
    }

    if (this.searchForm.dateOfBirth?.trim()) {
      filteredPatients = filteredPatients.filter(patient => 
        patient.dob.includes(this.searchForm.dateOfBirth.trim())
      );
    }

    // Advanced search filters
    if (this.searchForm.mrn?.trim()) {
      filteredPatients = filteredPatients.filter(patient => 
        patient.mrn.toLowerCase().includes(this.searchForm.mrn.toLowerCase().trim())
      );
    }

    if (this.searchForm.idNumber?.trim()) {
      filteredPatients = filteredPatients.filter(patient => 
        patient.idNumber.toLowerCase().includes(this.searchForm.idNumber.toLowerCase().trim())
      );
    }

    if (this.searchForm.lastFourSSN?.trim()) {
      filteredPatients = filteredPatients.filter(patient => 
        patient.lastFourSSN.includes(this.searchForm.lastFourSSN.trim())
      );
    }

    if (this.searchForm.phoneNumber?.trim()) {
      const cleanSearchPhone = this.searchForm.phoneNumber.replace(/\D/g, '');
      filteredPatients = filteredPatients.filter(patient => {
        const cleanPatientPhone = patient.phoneNumber.replace(/\D/g, '');
        return cleanPatientPhone.includes(cleanSearchPhone);
      });
    }

    if (this.searchForm.emailAddress?.trim()) {
      filteredPatients = filteredPatients.filter(patient => 
        patient.emailAddress.toLowerCase().includes(this.searchForm.emailAddress.toLowerCase().trim())
      );
    }

    if (this.searchForm.sex?.trim()) {
      filteredPatients = filteredPatients.filter(patient => 
        patient.sex.toLowerCase() === this.searchForm.sex.toLowerCase().trim()
      );
    }

    if (this.searchForm.hospital?.trim()) {
      filteredPatients = filteredPatients.filter(patient => 
        patient.hospital.toLowerCase().includes(this.searchForm.hospital.toLowerCase().trim())
      );
    }

    if (this.searchForm.dept?.trim()) {
      filteredPatients = filteredPatients.filter(patient => 
        patient.dept.toLowerCase().includes(this.searchForm.dept.toLowerCase().trim())
      );
    }

    if (this.searchForm.physician?.trim()) {
      filteredPatients = filteredPatients.filter(patient => 
        patient.physician.toLowerCase().includes(this.searchForm.physician.toLowerCase().trim())
      );
    }

    if (this.searchForm.conditions?.trim()) {
      filteredPatients = filteredPatients.filter(patient => 
        patient.conditions.toLowerCase().includes(this.searchForm.conditions.toLowerCase().trim())
      );
    }

    if (this.searchForm.residence?.trim()) {
      filteredPatients = filteredPatients.filter(patient => 
        patient.residence.toLowerCase().includes(this.searchForm.residence.toLowerCase().trim())
      );
    }

    // Date range filter (if provided)
    if (this.searchForm.startDate?.trim() && this.searchForm.endDate?.trim()) {
      // This would need to be implemented based on your date comparison logic
      // For now, just logging the date range
      console.log('Date range filter:', this.searchForm.startDate, 'to', this.searchForm.endDate);
    }

    this.patients = filteredPatients;
    this.activeTab = 'results';
  }

  onInputChange(): void {
    const hasBasicSearch = this.searchForm.firstName?.trim() || 
                          this.searchForm.lastName?.trim() || 
                          this.searchForm.dateOfBirth?.trim();
    
    const hasAdvancedSearch = this.searchForm.mrn?.trim() ||
                             this.searchForm.idNumber?.trim() ||
                             this.searchForm.lastFourSSN?.trim() ||
                             this.searchForm.phoneNumber?.trim() ||
                             this.searchForm.emailAddress?.trim() ||
                             this.searchForm.sex?.trim() ||
                             this.searchForm.hospital?.trim() ||
                             this.searchForm.dept?.trim() ||
                             this.searchForm.physician?.trim() ||
                             this.searchForm.conditions?.trim() ||
                             this.searchForm.residence?.trim();

    if (hasBasicSearch || hasAdvancedSearch) {
      this.searchPatients();
    } else {
      this.patients = this.allPatients;
      this.activeTab = 'today';
    }
  }

  selectPatient(patient: Patient): void {
    console.log('Selected patient:', patient);
  }

  clearForm(): void {
    this.searchForm = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      endDate: '',
      mrn: '',
      idNumber: '',
      lastFourSSN: '',
      phoneNumber: '',
      emailAddress: '',
      sex: '',
      hospital: '',
      dept: '',
      physician: '',
      conditions: '',
      residence: ''
    };
    this.patients = this.allPatients;
    this.activeTab = 'today';
  }

  openDatePicker(dateInput: HTMLInputElement) {
    dateInput.click();
  }

  
  onDateChange(event: any, fieldName: string, textInput: HTMLInputElement) {
    const selectedDate = event.target.value;
    if (selectedDate) {
     
      const date = new Date(selectedDate + 'T00:00:00');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();
      
      const formattedDate = `${month}/${day}/${year}`;
      
      
      (this.searchForm as any)[fieldName] = formattedDate;
      
      
      textInput.value = formattedDate;
      
      
      textInput.dispatchEvent(new Event('input'));
    }
  }

  
  formatDateInput(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2);
    }
    if (value.length >= 5) {
      value = value.substring(0, 5) + '/' + value.substring(5, 9);
    }
    event.target.value = value;
  }

  
  formatPhoneInput(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 3) {
      value = '(' + value.substring(0, 3) + ')';
      if (value.length > 4) {
        value += '-' + value.substring(4, 7);
        if (value.length > 9) {
          value += '-' + value.substring(9, 13);
        }
      }
    }
    event.target.value = value;
  }
}