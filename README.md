# Patient Search App

A  Angular application for searching and managing patient records in a healthcare setting.

## Features

### Core Functionality
- **Patient Search**: Search patients using basic or advanced criteria
- **Real-time Filtering**: Search results update automatically as you type
- **Tabbed Interface**: Switch between "Today's Patients" and "Search Results"
- **Patient Selection**: Click on any patient to select them
- **Form Validation**: Input formatting for dates and phone numbers

### Search Capabilities

#### Basic Search
- First Name
- Last Name
- Date of Birth
- Date Range (Start Date - End Date)

#### Advanced Search
- Medical Record Number (MRN)
- ID Number
- Last Four SSN Digits
- Phone Number
- Email Address
- Gender/Sex
- Hospital
- Department
- Physician
- Medical Conditions
- Residence

## Technology Stack

- **Framework**: Angular (Standalone Components)
- **Language**: TypeScript
- **Modules**: 
  - CommonModule
  - FormsModule
- **Styling**: CSS (component-specific)

## Data Structure

### Patient Interface
```typescript
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
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   ng serve
   ```
4. Navigate to `http://localhost:4200/`

## Usage

### Viewing Today's Patients
- Click the "Today" tab to view all patients scheduled for today
- Default view shows 6 sample patients from Massachusetts Medical Group

### Basic Search
1. Click the "Basic Search" tab within the search section
2. Enter any combination of:
   - First Name
   - Last Name
   - Date of Birth (MM/DD/YYYY format)
   - Date Range

### Advanced Search
1. Click the "Advanced Search" tab
2. Use any of the additional search fields:
   - MRN, ID Number, SSN
   - Contact information
   - Hospital details
   - Medical information

### Search Features
- **Auto-complete**: Results update as you type
- **Case-insensitive**: Search works regardless of capitalization
- **Partial matching**: Find patients with partial name or information matches
- **Clear form**: Reset all search fields and return to today's view

### Input Formatting
- **Date fields**: Automatically format to MM/DD/YYYY
- **Phone numbers**: Auto-format to (XXX)-XXX-XXXX
- **Date picker**: Click the calendar icon for date selection

## Sample Data

The application includes 6 sample patients:
- Ashley Citarella (Female, DOB: 07/02/1958)
- Albert Johnson (Male, DOB: 01/15/1952) 
- Leslie Isabelle Wang (Female, DOB: 03/12/1985)
- Adela Bašić (Female, DOB: 03/12/1950)
- Reza Saatchi (Male, DOB: 03/12/1957)
- Arjun Chandrasekar (Male, DOB: 03/12/1958)

All sample patients are associated with:
- **Hospital**: Massachusetts Medical Group
- **Department**: Department of Cardiology
- **Physician**: Dr. Beth Smith

## Code Structure

### Key Components
- `AppComponent`: Main component handling all functionality
- `SearchForm`: Interface defining search parameters
- `Patient`: Interface defining patient data structure

### Key Methods
- `searchPatients()`: Filters patients based on search criteria
- `onInputChange()`: Handles real-time search updates
- `setActiveTab()`: Manages tab navigation
- `clearForm()`: Resets search form
- `formatDateInput()`: Formats date inputs
- `formatPhoneInput()`: Formats phone number inputs

## Development Notes

### Customization
- Patient data is stored in the `allPatients` array
- Search logic can be modified in the `searchPatients()` method
- Additional search fields can be added to both interfaces
- Styling can be customized in the component CSS file

### Future Enhancements
- Backend integration for real patient data
- Date range filtering implementation
- Export functionality
- Patient detail views
- User authentication
- Advanced filtering options

## Future Security Considerations

⚠️ **Important**: This demo contains sample data only. For production use:
- Implement proper authentication and authorization
- Ensure HIPAA compliance
- Use encrypted data transmission
- Implement audit logging
- Follow healthcare data security best practices
