package com.example.springsocial.repository;

import com.example.springsocial.model.chat.ChatMessage;
import com.example.springsocial.model.chat.MessageStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {

    long countBySenderIdAndRecipientIdAndStatus(String senderId, String recipientId, MessageStatus status);

    List<ChatMessage> findByChatId(Optional<String> chatId);

   /* @Modifying
    @Query( "UPDATE ChatMessage SET status=:status WHERE senderid=:senderId AND recipienId=:recipientId")
    boolean messageStatus(@Param("status") MessageStatus status, @Param("senderId") Long senderId, @Param("recipientId") Long recipientId);*/

    @Query("update ChatMessage cm SET cm.status = status WHERE cm.senderId = senderId AND cm.recipientId = recipientId")
    boolean  messageStatus(@Param("status") MessageStatus status, @Param("senderId") Long senderId, @Param("recipientId") Long recipientId);

}