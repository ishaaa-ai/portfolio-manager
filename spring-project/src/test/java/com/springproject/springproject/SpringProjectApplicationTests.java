package com.springproject.springproject;

import com.springproject.springproject.entities.Price;
import com.springproject.springproject.entities.Stock;
import com.springproject.springproject.repos.PriceRepository;
import com.springproject.springproject.service.PriceService;
import org.hamcrest.CoreMatchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDateTime;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import static org.hamcrest.MatcherAssert.assertThat;

@ExtendWith(SpringExtension.class)
@DataJpaTest // use an in memory database
@ContextConfiguration(classes= AppConfig.class)
@TestPropertySource(locations = "classpath:application-test.properties")
class SpringProjectApplicationTests {

	@Autowired
	private TestEntityManager manager;

	@Autowired // this is a mock which is injected because of the @DataJpaTest
	private PriceRepository repo;

	@Autowired
	PriceService priceService;

	private int priceId;

	@BeforeEach
	public void setupDatabaseEntryForReadOnlyTests() {
		Stock stock = new Stock("AMZN", "Amazon");
		Stock resultStock = manager.persist(stock);

		Price price = new Price(resultStock, 1.0, 2.0, 10, LocalDateTime.parse("2021-01-04 00:00:00"));
		Price result = manager.persist(price);
		priceId = result.getId();
	}

	@Test
	public void canRetrievePriceByDate() {
		Iterable<Price> prices = repo.findAllByRecordDate("2021-01-04 00:00:00");
		Stream<Price> stream = StreamSupport.stream(prices.spliterator(), false);
		assertThat(stream.count(), CoreMatchers.equalTo(1L));
	}

//	@Test
//	public void compactDiscServiceCanReturnACatalog() {
//		Iterable<CompactDisc> discs = discService.getCatalog();
//		Stream<CompactDisc> stream = StreamSupport.stream(discs.spliterator(), false);
//		Optional<CompactDisc> firstDisc = stream.findFirst();
//		assertThat(firstDisc.get().getArtist(), equalTo("Abba"));
//	}

//	@Test
//	public void controllerCanReturnCDById() {
//		CompactDisc cd = controller.findOne(discId);
//		assertThat(cd.getArtist(), equalTo("Abba"));
//	}

}
