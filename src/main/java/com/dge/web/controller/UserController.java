package com.dge.web.controller;

import com.dge.web.domain.User;
import com.dge.web.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping(value = "/user")
    public List findAll() {
        return userService.findAll();
    }

    @GetMapping(value = "/user/{id}")
    public User findById(@PathVariable("id") Long id) {
        User user = userService.findById(id);
        System.out.println(user);
        return user;
    }

    @PostMapping(value = "/user/login")
    public User login(@RequestBody User user, HttpSession session) {
        User dbUser = userService.login(user);
        if(dbUser == null){
            return null;
        }else{
            session.setAttribute("ID", dbUser);
            return dbUser;
        }
    }
    @GetMapping(value="/session")
    public User session(HttpSession session){
        return (User)session.getAttribute("ID");
    }

    @GetMapping(value="/logout")
    public void logout(HttpSession session){
        session.removeAttribute("ID");
    }


}

