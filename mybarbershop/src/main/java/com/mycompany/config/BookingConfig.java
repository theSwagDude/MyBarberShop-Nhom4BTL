/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.config;

import com.mycompany.models.BookingCheck;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 *
 * @author HP
 */
@Configuration
public class BookingConfig {
    @Bean
    public BookingCheck bookingCheck() {
//        System.out.println("check bean");
        return new BookingCheck();
    }
}
