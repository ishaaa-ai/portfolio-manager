package com.springproject.springproject;

import com.springproject.springproject.entities.Price;
import com.springproject.springproject.entities.Stock;
import com.springproject.springproject.repos.PortfolioRepository;
import com.springproject.springproject.repos.PriceRepository;
import com.springproject.springproject.service.PriceService;
import org.hamcrest.CoreMatchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

@SpringBootTest
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
		Stock stock = new Stock(1, "AMZN", "Amazon");
		Stock resultStock = manager.persist(stock);

		Price price = new Price(1, resultStock, 1.0, 2.0, 10, "2021-01-04 00:00:00");
		Price result = manager.persist(price);
		priceId = result.getId();
	}

	@Test
	public void canRetrievePriceByDate() {
		Iterable<Price> prices = repo.findAllByDate("2021-01-04 00:00:00");
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
