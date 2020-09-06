@core
Feature:
  Httpbin.org exposes various resources for HTTP request testing
  As Httpbin client I want to verify that all API resources are working as they should

  Scenario: Response code checks
    When I GET /json
    Then response code should be 200
    And response code should not be 404
