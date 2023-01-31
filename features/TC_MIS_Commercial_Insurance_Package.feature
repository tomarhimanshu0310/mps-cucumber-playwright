Feature: MIS Commercial Insurance Package
  Tests the functionalities related to MIS Commercial Insurance Package product    

  Scenario: Scenario test the Login functionality with Broker credentials
    Given I should land on "HomePage"
    When "HomePage" title should be "Welcome to Marsh Placement Services"
    Then I select the role of the user as "Broker"
    Then Select the "Broker" name from the Servicer dropdown

  Scenario:  Create a new draft quote to test the related functionalities 
    Given I select "Create a new draft quote" value for creating a new draft quote
    When I select the Policy templates as "MIS Commercial Insurance Package"
    Then I validate that the New policy form should appear
    When I fill the required parameters for creating a new policy
    Then I click on "Create" button

    

  
    



 
