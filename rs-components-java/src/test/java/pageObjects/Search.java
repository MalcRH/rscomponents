package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Search {

    final WebDriver driver;
    Actions actions;
    WebDriverWait wait;

    public Search(WebDriver driver) {
        this.driver = driver;
        actions = new Actions(driver);
        wait = new WebDriverWait(driver, 20);
    }

    @FindBy(id = "searchTerm")
    public WebElement searchBox;

    @FindBy(id = "btnSearch")
    public WebElement searchButton;

    public void searchForProduct(String product) {
        searchBox.sendKeys(product);
        searchButton.click();
    }

    public void confirmProductPresent(String result) {
        WebElement productDisplayed = driver.findElement(By.partialLinkText(result));
        productDisplayed.isDisplayed();
    }

}
