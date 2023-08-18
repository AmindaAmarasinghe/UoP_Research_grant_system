package com.mplus.backend.controller;

import com.mplus.backend.entity.ItemsCompleted;
import com.mplus.backend.entity.ToDateQuantities;
import com.mplus.backend.service.ItemsServices;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ItemsContoller {
    private final ItemsServices itemsServices;

    public ItemsContoller(ItemsServices itemsServices) {
        this.itemsServices = itemsServices;
    }

    @GetMapping("/get_total")
    public List<ToDateQuantities> getToDateQuantityServices(){
        return itemsServices.getToDateQuantityServices();
    }

    @PostMapping("/set_data")
    public ItemsCompleted saveEmployee(@RequestBody ItemsCompleted itemsCompleted) {
        return itemsServices.saveItemsCompleted(itemsCompleted);
    }
}
