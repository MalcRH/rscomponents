package step_definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import pageObjects.PurchaseJourney;
import pageObjects.Search;

import java.util.concurrent.TimeUnit;

public class MyStepdefs {
    private WebDriver driver;
    private PurchaseJourney purchaseJourney;
    private Search search;
    private String url = "https://uk.rs-online.com/web/";

    public static void main(String[] args){
    }

        @Before
        public void beforeScenario() throws Throwable {
            driver = new ChromeDriver();
            purchaseJourney = PageFactory.initElements(driver, PurchaseJourney.class);
            search = PageFactory.initElements(driver, Search.class);
            driver.manage().window().maximize();
            driver.get(url);
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

        @After
        public void afterScenario() throws Throwable {
//            driver.quit();
        }

        @Given("^I am on the home page$")
        public void navigateToHomePage(){
        purchaseJourney.homePage();
        }

        @And("^I select (.*?), (.*?), (.*?)$")
        public void selectAndAddProduct(String mainProduct, String subProduct, String product) {
            purchaseJourney.selectAndAddProduct(mainProduct, subProduct, product);
        }

        @When("^I proceed to the checkout using email address (.*?)$")
        public void viewBasket(String emailAddress) {
            purchaseJourney.viewBasket(emailAddress);
        }

        @When("^I search for (.*?)$")
        public void searchForProduct(String product) {
            search.searchForProduct(product);
        }

        @Then("^I should see the checkout screen$")
        public void enterPersonalInformation() {
            purchaseJourney.checkoutScreen();
        }

        @Then("^I should see (.*?) appear in the results$")
        public void confirmResult(String result) {
            search.confirmProductPresent(result);
        }

    }
