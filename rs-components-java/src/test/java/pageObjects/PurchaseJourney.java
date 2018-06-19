package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class PurchaseJourney {

    final WebDriver driver;
    Actions actions;
    WebDriverWait wait;

    public PurchaseJourney(WebDriver driver) {
        this.driver = driver;
        actions = new Actions(driver);
        wait = new WebDriverWait(driver, 20);
    }

    // Using class name
    @FindBy(className = "rslogo")
    public WebElement homePage;

    @FindBy(className = "addToBasketMessageText")
    public WebElement basket;

    // Using xpath
    @FindBy(xpath = "/html/body/div[4]/div/ul/li[1]/a")
    public WebElement allProducts;

    @FindBy(xpath = "//*[@id=\"deliveryCollectionForm:CustomerContactDetailsWidgetAction_title_decorate\"]/span/select/option[4]")
    public WebElement selectMr;

    // Using partial link text
    @FindBy(partialLinkText = "Delivery")
    public WebElement checkoutScreen;

    // Using ID
    @FindBy(id = "guestCheckoutForm:GuestWidgetAction_emailAddress_decorate:GuestWidgetAction_emailAddress")
    public WebElement emailAddressTestBox;

    @FindBy(id = "atbBtn-1")
    public WebElement addToBasket;

    @FindBy(id = "checkoutSecurelyAndPuchBtn")
    public WebElement checkout;

    @FindBy(id = "guestCheckoutForm:guestCheckout")
    public WebElement guestCheckoutBtn;

    public void homePage() {
        homePage.isDisplayed();
    }

    public void selectAndAddProduct(String mainProduct, String subProduct, String product) {
        allProducts.click();
        WebElement hoverMainProduct = driver.findElement(By.partialLinkText(mainProduct));
        actions.moveToElement(hoverMainProduct).perform();
        WebElement hoverSubProduct = driver.findElement(By.partialLinkText(subProduct));
        hoverSubProduct.click();
        WebElement productToPurchase = driver.findElement(By.partialLinkText(product));
        productToPurchase.click();
        addToBasket.click();
        // Intermittent survey alert needs to be handled - will fail test intermittently
    }

    public void viewBasket(String emailAddress) {
        wait.until(ExpectedConditions.visibilityOf(basket));
        basket.click();
        checkout.click();
        driver.switchTo().window(driver.getWindowHandle());
        emailAddressTestBox.sendKeys(emailAddress);
        guestCheckoutBtn.click();
    }

    public void checkoutScreen() {
        checkoutScreen.isDisplayed();
        selectMr.click();
    }

}
