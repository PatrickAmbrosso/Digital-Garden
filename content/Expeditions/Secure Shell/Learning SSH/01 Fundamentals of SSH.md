---
title: Fundamentals of SSH
description: 
tags: 
publish: true
---

This section deals with the basics of the SSH Protocol, and specifically the OpenSSH implementation. Topics such as the history of SSH & OpenSSH, the components of an SSH environment and more.


> [!info] Title
> This guide uses SSH and OpenSSH interchangeably, as OpenSSH is the most widely used implementation of the SSH protocol, with its presence in almost all Unix-based operating systems and even on Windows.

### History
In the early days of networked computing, protocols like Telnet and rlogin were commonly used for remote access to systems. However, these protocols transmitted data, including passwords, in plaintext, making them vulnerable to eavesdropping and unauthorized access.

In *1995*, *Tatu Ylönen*, a *Finnish researcher*, developed the Secure Shell (SSH) protocol as a secure *alternative to Telnet and rlogin*. His goal was to create a secure method for remote login and encrypted communication between networked devices. Ylönen initially released the SSH protocol as a proprietary software solution. However, realizing the importance of open standards and collaboration, he encouraged the development of an open-source version.

In *1999*, *OpenSSH* was born as an *open-source implementation of the SSH protocol suite*. It was derived from the original SSH implementation, which was freely available but not open source. The OpenSSH project was started by developers associated with the *OpenBSD operating system*. They aimed to create an open-source implementation of SSH that emphasized security, code auditability, and robustness. Over the years, OpenSSH has evolved to include various features beyond the core SSH functionality. This includes support for *encrypted file transfers (SFTP and SCP)*, *port forwarding*, *X11 forwarding*, and more. The project has received contributions from developers worldwide, allowing for ongoing improvements and bug fixes.

OpenSSH gained widespread adoption due to its *security*, *reliability*, and *cross-platform compatibility*. It became the default SSH implementation in many Unix-like operating systems, including Linux, FreeBSD, and macOS. It is now considered the *de facto standard for SSH*. OpenSSH has a strong focus on security and actively addresses vulnerabilities through regular updates and patches. The OpenSSH team maintains a coordinated process to promptly respond to security issues and release secure updates to the software.

### Architecture
The SSH protocol serves as the underlying communication protocol for secure remote access and other services provided by SSH. It defines the format and structure of messages exchanged between the SSH client and server during the connection process. The SSH protocol includes mechanisms for encryption, authentication, and integrity checks to ensure secure and reliable communication. The protocol supports different versions, such as SSH1 and SSH2, with SSH2 being the more secure and widely used version today.

The SSH architecture is composed of two main components
1. **SSH Server**
    - The SSH server is responsible for hosting the services and resources that clients can connect to securely. It runs on the remote machine that you want to access.
    - When a client initiates an SSH connection, the SSH server handles the authentication, encryption, and session management on the server-side.
    - The SSH server listens for incoming SSH connections on a specific port (default is port 22) and establishes secure communication channels with the client.
    - Examples of SSH server software include OpenSSH, Microsoft OpenSSH, and Bitvise SSH Server.
2. **SSH Client**
    - The SSH client is the software or tool used to initiate a connection to an SSH server. It runs on the local machine from which the remote server is accessed.
    - The SSH client provides the interface for users to authenticate, securely transmit commands and data, and interact with the remote server.
    - When a client initiates an SSH connection, it establishes a secure communication channel with the server, authenticates the user, and manages the encrypted session.
    - Examples of SSH client software include OpenSSH (ssh command-line tool), PuTTY, and Bitvise SSH Client.

### How does SSH work?
Here is a quick rundown of a typical SSH workflow.
1. **Connection Initiation** - When a client initiates an SSH connection to a server, they perform a handshake to establish a secure connection using cryptographic algorithms. The client and server exchange keys, verify each other's identity, and negotiate encryption algorithms for secure communication.
2. **Authentication** - Once the connection is established, the client can securely authenticate using either a password or an SSH key. The server verifies the client's credentials, and upon successful authentication, grants access to the remote shell or executes remote commands on the server.
3. **Encrypted Communication** - Throughout the session, all data transmitted between the client and server is encrypted, providing confidentiality and integrity. SSH also supports additional features like port forwarding, allowing secure access to services running on the server via the encrypted SSH tunnel.

SSH was developed as a secure alternative to earlier remote login protocols like Telnet, which transmitted data in plain text, making it vulnerable to interception and unauthorized access. With SSH, *all communication is encrypted*, preventing eavesdropping and protecting sensitive information such as usernames, passwords, and commands.