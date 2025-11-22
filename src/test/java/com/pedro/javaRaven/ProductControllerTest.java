package com.pedro.javaRaven;

import com.pedro.javaRaven.controller.ProductControllerRaven;
import com.pedro.javaRaven.dto.ProductRecordDto;
import com.pedro.javaRaven.repositories.ProductRepository;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;


@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class ProductControllerTest {

        @Autowired
        private MockMvc mockMvc;

        @MockBean
        private ProductControllerRaven controller;

        @Test
        void saveStuff() throws Exception {
            ProductRecordDto saved = new ProductRecordDto("iPhone 17 Pro Max", new BigDecimal(("1700.00")));
            ProductRecordDto input = new ProductRecordDto("null", new BigDecimal("3000.00"));

            when(controller.createProduct(any())).thenReturn(saved);
    }
 
}
