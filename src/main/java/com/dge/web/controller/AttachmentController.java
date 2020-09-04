package com.dge.web.controller;

import com.dge.web.Protocol.AttachmentProtocol;
import com.dge.web.domain.User;
import com.dge.web.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URLConnection;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@RestController
public class AttachmentController {
    @Autowired
    UserService userService;

    @PostMapping("/api/attachment")
    public AttachmentProtocol upload(@RequestPart MultipartFile srcFile) {
        String destFilename = "E:/Source/IdeaProjects/dgsw_board/backend/upload/"
                + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd/"))
                + UUID.randomUUID().toString() + "_" + srcFile.getOriginalFilename();
        try {
            File destFile = new File(destFilename);
            destFile.getParentFile().mkdirs();
            srcFile.transferTo(destFile);
            return new AttachmentProtocol(destFilename, srcFile.getOriginalFilename());
        } catch (Exception e) {
            return null;
        }
    }
    @GetMapping("/api/attachment/{id}")
    public void downloadUser(@PathVariable Long id, HttpServletRequest req, HttpServletResponse res) {
        String filePath = null;
        String fileName = null;

        try {
            User user = userService.findById(id);
            System.out.println(user);
            filePath = user.getStoredPath();
            fileName = user.getOriginalName();

            if (filePath == null || fileName == null) return;;

            File file = new File(filePath);
            if (! file.exists()) return;

            String mimeType = URLConnection.guessContentTypeFromName(file.getName());
            if (mimeType == null) mimeType = "application/octet-stream";

            res.setContentType(mimeType);
            res.setHeader("Content-Disposition", "inline; filename=\"" + fileName + "\"");
            res.setContentLength((int) file.length());

            InputStream is = new BufferedInputStream(new FileInputStream(file));
            FileCopyUtils.copy(is, res.getOutputStream());
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
