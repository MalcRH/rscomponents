Feature: End to End purchase journey

  Scenario Outline: Go through the purchase journey up to the checkout page
    Given I am on the home page
    And I select <main_product>, <sub_product>, <product>
    When I proceed to the checkout using email address <email>
    Then I should see the checkout screen

    Examples:
      | main_product | sub_product                    | product             | email            |
      | Batteries    | Automotive Battery Maintenance | Battery Jump Leads  | malcrh@gmail.com |
      | Connectors   | IC Sockets                     | Lighting Connectors | malcrh@gmail.com |
