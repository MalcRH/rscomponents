Feature: Search for a product

  Scenario Outline: Search for a product and confirm its presence
    Given I am on the home page
    When I search for <product>
    Then I should see <product> appear in the results

    Examples:
      | product        |
      | Batteries      |
      | Semiconductors |
      | Tools          |
