@site_title
Feature: Site title

  As a developer
  In order to customize the site title
  I want to set it in the configuration

  Background:
    Given I am logged in

  Scenario: Set the site title
    Given a configuration of:
    """
      ActiveAdmin.application.site_title = "My Great Site"
    """
    When I am on the dashboard
    And I should see the site title "My Great Site"

  Scenario: Set the site title to a proc
    Given a configuration of:
    """
      ActiveAdmin.application.site_title = proc { "Hello #{controller.current_admin_user.try(:email) || 'you!'}" }
    """
    When I am on the dashboard
    And I should see the site title "Hello admin@example.com"
