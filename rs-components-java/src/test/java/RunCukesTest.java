import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(format = {"html:target/CucumberResults/html/cucumber-html-report",
        "json:target/CucumberResults/json/cucumber-reports.json"},
        features = "src/test/resources/features/",
        glue = "step_definitions"
)

public class RunCukesTest {

}
