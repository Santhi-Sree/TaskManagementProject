$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/NewTaskAdd.feature");
formatter.feature({
  "name": "Add Task in Task Management website",
  "description": "\tIn order to login to website\n\tAs a Task Manager\n\tI want to get access to the portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search Task",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter data \u0027\u003cAssigned To\u003e\u0027 \u0027\u003cProject\u003e\u0027 \u0027\u003cPriority\u003e\u0027 \u0027\u003cStatus\u003e\u0027 \u0027\u003cType\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "Click on search button i should get the results",
  "keyword": "And "
});
formatter.step({
  "name": "I should access the portal with title as \u0027Task Manager\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Assigned To",
        "Project",
        "Priority",
        "Status",
        "Type"
      ]
    },
    {
      "cells": [
        "Peter Larsen",
        "CodeCharge",
        "High",
        "Closed",
        "Task"
      ]
    },
    {
      "cells": [
        "Helen Deering",
        "CodeCharge",
        "High",
        "On hold",
        "Issue"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser \u0027ch\u0027 with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_have_browser_with_Task_Management_website(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Task",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter data \u0027Peter Larsen\u0027 \u0027CodeCharge\u0027 \u0027High\u0027 \u0027Closed\u0027 \u0027Task\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_enter_data(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button i should get the results",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.click_on_search_button_i_should_get_the_results()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should access the portal with title as \u0027Task Manager\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_should_access_the_portal_with_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser \u0027ch\u0027 with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_have_browser_with_Task_Management_website(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Task",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter data \u0027Helen Deering\u0027 \u0027CodeCharge\u0027 \u0027High\u0027 \u0027On hold\u0027 \u0027Issue\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_enter_data(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button i should get the results",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.click_on_search_button_i_should_get_the_results()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should access the portal with title as \u0027Task Manager\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_should_access_the_portal_with_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser \u0027ch\u0027 with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_have_browser_with_Task_Management_website(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Access Task",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on task and enter login details from excel \u0027src/test/resources/Excel/TaskManagement.xlsx\u0027 with sheetname \u0027ValidLoginDetails\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_click_on_task_and_enter_login_details_from_excel_with_sheetname(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the text in Task field as \u0027Low on ammunition? Get armed. Get CodeCharge.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_should_get_the_text_in_Task_field_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser \u0027ch\u0027 with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_have_browser_with_Task_Management_website(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Task with Valid Credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Add Task Icon and enter login details from excel \u0027src/test/resources/Excel/TaskManagement.xlsx\u0027 with sheetname \u0027ValidLoginDetails\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_click_on_Add_Task_Icon_and_enter_login_details_from_excel_with_sheetname(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter data from excel \u0027src/test/resources/Excel/TaskManagement.xlsx\u0027 with sheetname \u0027ValidTaskDetails\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_enter_data_from_excel_with_sheetname(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should return to \u0027Task Manager\u0027 page by clicking on add button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_should_return_to_page_by_clicking_on_add_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add Task with Invalid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click on Add Task Icon and enter login details from excel \u0027src/test/resources/Excel/TaskManagement.xlsx\u0027 with sheetname \u0027ValidLoginDetails\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I enter data \u0027\u003cDescription\u003e\u0027 \u0027\u003cProject\u003e\u0027 \u0027\u003cPriority\u003e\u0027 \u0027\u003cStatus\u003e\u0027 \u0027\u003cType\u003e\u0027 \u0027\u003cAssigned To\u003e\u0027 \u0027\u003cStart Date\u003e\u0027 \u0027\u003cFinish Date\u003e\u0027 and click on add button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get error message as \u0027The value in field Task is required.\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Description",
        "Project",
        "Priority",
        "Status",
        "Type",
        "Assigned To",
        "Start Date",
        "Finish Date"
      ]
    },
    {
      "cells": [
        "I need to test the task",
        "CodeCharge",
        "High",
        "In progress",
        "Task",
        "Stan Simon",
        "03/14/20",
        "03/18/20"
      ]
    },
    {
      "cells": [
        "Need a break",
        "CodeCharge",
        "Lowest",
        "Closed",
        "Question",
        "Ken Price",
        "03/18/20",
        "03/20/20"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser \u0027ch\u0027 with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_have_browser_with_Task_Management_website(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Task with Invalid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click on Add Task Icon and enter login details from excel \u0027src/test/resources/Excel/TaskManagement.xlsx\u0027 with sheetname \u0027ValidLoginDetails\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_click_on_Add_Task_Icon_and_enter_login_details_from_excel_with_sheetname(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter data \u0027I need to test the task\u0027 \u0027CodeCharge\u0027 \u0027High\u0027 \u0027In progress\u0027 \u0027Task\u0027 \u0027Stan Simon\u0027 \u002703/14/20\u0027 \u002703/18/20\u0027 and click on add button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_enter_data_and_click_on_add_button(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error message as \u0027The value in field Task is required.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_should_get_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser \u0027ch\u0027 with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_have_browser_with_Task_Management_website(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Task with Invalid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click on Add Task Icon and enter login details from excel \u0027src/test/resources/Excel/TaskManagement.xlsx\u0027 with sheetname \u0027ValidLoginDetails\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_click_on_Add_Task_Icon_and_enter_login_details_from_excel_with_sheetname(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter data \u0027Need a break\u0027 \u0027CodeCharge\u0027 \u0027Lowest\u0027 \u0027Closed\u0027 \u0027Question\u0027 \u0027Ken Price\u0027 \u002703/18/20\u0027 \u002703/20/20\u0027 and click on add button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_enter_data_and_click_on_add_button(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error message as \u0027The value in field Task is required.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_should_get_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser \u0027ch\u0027 with Task Management website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_have_browser_with_Task_Management_website(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit Task",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on existing task and enter login details from excel \u0027src/test/resources/Excel/TaskManagement.xlsx\u0027 with sheetname \u0027ValidLoginDetails\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_click_on_existing_task_and_enter_login_details_from_excel_with_sheetname(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on task and enter data \u0027Enter code\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.click_on_task_and_enter_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should redirect to \u0027Task Manager\u0027 page when i  click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.NewTaskAddStepDefinition.i_should_redirect_to_page_when_i_click_on_submit_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});