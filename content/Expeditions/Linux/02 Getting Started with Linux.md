---
title: Getting Started
description: 
tags: 
publish: true
---
## Understanding Linux Filesystem Hierarchy

The *Filesystem Hierarchy Standard* or *FHS* is a set of conventions for organizing the structure and contents of the file system in Unix-like operating systems, including Linux. The FHS *defines* the *layout* of directories and the *purpose* of each directory in the file system hierarchy. It helps maintain *consistency across* different Linux *distributions* and ensures that software can be installed and run in a predictable manner.

```txt
🖥️ LINUX FILE HIERARCHY STANDARD

🌐 / (Root)
├── 🗄️ bin          ---> Essential binaries for users
├── 🖥️ boot         ---> Boot loader files and kernel
├── 🛠️ dev          ---> Device files
├── 📝 etc          ---> System-wide configuration
├── 🏡 home         ---> User home directories
│   ├── 👤 user1    ---> Home directory for user1
│   ├── 👤 user2    ---> Home directory for user2
│   └── 👤 user3    ---> Home directory for user3
├── 📚 lib          ---> Shared libraries
├── 🗻 mnt          ---> Mount points for temporary filesystems
├── 🧰 opt          ---> Optional software packages
├── 📊 proc         ---> Process and kernel information
├── 🌐 root         ---> Home directory for the root user
├── ⏳ run          ---> System runtime data
├── 🔧 sbin         ---> System binaries for system administration
├── 🌐 srv          ---> Data for services provided by the system
├── 🧠 sys          ---> Kernel and devices information
├── 🌡️ tmp          ---> Temporary files
├── 🌐 usr          ---> Secondary hierarchy for user data
│   ├── 💼 bin      ---> User binaries
│   ├── 🔧 sbin     ---> System binaries for user administration
│   ├── 📚 lib      ---> User libraries
│   ├── 📂 include  ---> Header files for C programming
│   ├── 🌐 share    ---> Architecture-independent data files
│   └── 📂 src      ---> Source code (Linux kernel & software packages)
└── 📂 var          ---> Variable data
    ├── 📂 log      ---> Log files
    ├── 📂 spool    ---> Spool files
    └── ⚙️ run      ---> Runtime data

```

Here's a detailed look into each directory

- `/` (Root Directory):
	- **Description:** The root directory is the top-level directory in the file system hierarchy.
	- **Purpose:** It contains all other directories and files on the system.
	- **Key Subdirectories:**
	    - `/bin`: Essential user command binaries (e.g., `ls`, `cp`, `mv`).
	    - `/boot`: Boot loader files and the Linux kernel.
	    - `/dev`: Device files representing hardware devices.
	    - `/etc`: System-wide configuration files.
	    - `/home`: Home directories for users.
	    - `/lib` and `/lib64`: Shared libraries.
	    - `/media`: Mount points for removable media (e.g., CD-ROMs, USB drives).
	    - `/mnt`: Mount points for temporarily mounted filesystems.
	    - `/opt`: Optional software packages.
	    - `/proc`: Process and kernel information.
	    - `/root`: Home directory for the root user.
	    - `/run`: System runtime data.
	    - `/sbin`: System binaries (e.g., `fdisk`, `ifconfig`, `mount`).
	    - `/srv`: Data for services provided by the system.
	    - `/sys`: Information about the kernel and devices.
	    - `/tmp`: Temporary files.
	    - `/usr`: Secondary hierarchy for read-only user data.
	    - `/var`: Variable data (e.g., log files, mail, and spool directories).
- `/bin` (Essential User Binaries)
	- **Description:** Essential user command binaries.
	- **Purpose:** Contains fundamental binaries needed for system recovery and repair.
	- **Examples:** `ls`, `cp`, `mv`, `rm`, `cat`, etc.
- `/boot` (Boot Loader Files and Kernel)
	- **Description:** Contains files needed for the boot process.
	- **Purpose:** Holds the Linux kernel, boot loader configuration, and other boot-related files.
	- **Examples:** `vmlinuz` (Linux kernel), `initramfs` (initial RAM file system), `grub` (GRand Unified Bootloader).
- `/dev` (Device Files)
	- **Description:** Contains device files representing hardware devices.
	- **Purpose:** Provides access to hardware devices and kernel interfaces.
	- **Examples:** `/dev/sda` (first hard disk), `/dev/tty1` (virtual console 1), `/dev/null` (null device).
-  `/etc` (System-Wide Configuration)
	- - **Description:** Contains system-wide configuration files.
	- **Purpose:** Stores configuration files for the system and installed software.
	- **Examples:** `/etc/passwd` (user account information), `/etc/hostname` (system hostname), `/etc/network` (network configuration).
- `/home` (User Home Directories)
	- **Description:** Home directories for user accounts.
	- **Purpose:** Each user has a subdirectory here for their personal files and settings.
	- **Examples:** `/home/user1`, `/home/user2`.
- `/lib` and `/lib64` (Shared Libraries)
	- **Description:** Shared libraries needed by system binaries in `/bin` and `/sbin`.
	- **Purpose:** Provides commonly used libraries for system binaries.
	- **Examples:** `/lib/libc.so.6` (GNU C Library), `/lib64/libm.so.6` (math library).
- `/media` (Removable Media Mount Points)
	- **Description:** Mount points for removable media devices.
	- **Purpose:** Automatically mounted directories for devices like CD-ROMs, USB drives, etc.
	- **Examples:** `/media/cdrom`, `/media/usb`.
- `/mnt` (Temporary Mount Points)
	- **Description:** Mount points for temporarily mounted filesystems.
	- **Purpose:** Provides a location for administrators to mount temporary filesystems.
	- **Examples:** `/mnt/cdrom`, `/mnt/usb`.
- `/opt` (Optional Software Packages)
	- **Description:** Contains optional software packages.
	- **Purpose:** Provides a location for software not installed by the system package manager.
	- **Examples:** `/opt/google/chrome`, `/opt/developer/tool`.
- `/proc` (Process and Kernel Information)
	- **Description:** A virtual filesystem providing information about processes and the kernel.
	- **Purpose:** Allows access to process and kernel-related information.
	- **Examples:** `/proc/cpuinfo`, `/proc/meminfo`.
- `/root` (Root User Home Directory)
	- **Description:** Home directory for the root user.
	- **Purpose:** Contains personal files and settings for the root user.
- `/run` (System Runtime Data)
	- **Description:** Runtime data for processes started since the last boot.
	- **Purpose:** Holds runtime data, including process IDs and system state information.
- `/sbin` (System Binaries)
	- **Description:** System binaries that are essential for system administration.
	- **Purpose:** Contains binaries used for system maintenance and recovery.
	- **Examples:** `fdisk`, `ifconfig`, `mount`, `reboot`.
- `/srv` (Service Data)
	- **Description:** Data for services provided by the system.
	- **Purpose:** Contains data used by services or servers on the system.
	- **Examples:** `/srv/www` (web server data), `/srv/ftp` (FTP server data).
- `/sys` (Kernel and Devices Information):
	- **Description:** A virtual filesystem providing information about the kernel and devices.
	- **Purpose:** Offers information about the kernel and connected devices.
- `/tmp` (Temporary Files)
	- **Description:** Temporary files created by system and users.
	- **Purpose:** Provides a location for temporary storage that is cleared on reboot.
- `/usr` (Secondary Hierarchy for User Data)
	- **Description:** A secondary hierarchy for read-only user data.
	- **Purpose:** Contains non-essential user-readable data.
	- **Examples:** `/usr/bin` (user binaries), `/usr/lib` (user libraries).
- `/var` (Variable Data)
	- **Description:** Variable data, such as logs, spool files, and temporary files.
	- **Purpose:** Contains files that may change in size and content during the system's lifecycle.
	- **Examples:** `/var/log` (log files)

## Importance of the Linux CLI

The *Command-Line Interface* or *CLI* is a text-based interface that allows users to interact with a computer by typing commands. In Linux, the CLI is commonly accessed through a terminal emulator, providing a direct means to issue commands to the operating system.

| **Terminal**                                                                                                 | **Console**                                                                                                             | **Shell**                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| A Terminal is a software interface allowing users to *interact with the Command-Line Interface* (CLI).       | Console refers to the *physical terminal* or terminal window where the CLI is accessed.                                 | A Shell is a *command interpreter* that interprets and executes user commands.                                                   |
| It provides a text-based environment for entering commands and receiving text-based output.                  | It provides a means for interacting with the CLI, either physically or virtually.                                       | It acts as an *interface* between the *user and the kernel*, translating commands into system actions.                           |
| Some popular terminal emulators include GNOME Terminal, Konsole, xterm                                       | Console is accessed as Physical terminals, terminal windows or virtual consoles                                         | Some examples include Bash, Zsh , Fish                                                                                           |
| Most relevant in GUI Linux distributions, where terminal emulators serve as graphical interfaces to the CLI. | Commonly used in both GUI and CLI environments, but may refer specifically to text-only interfaces in CLI environments. | Accessed in both GUI and CLI-based Linux installations, responsible for executing commands and providing scripting capabilities. |

Following are the most commonly used shells in Linux

1. **Bash (Bourne Again SHell)**    
    - Bash is the default shell for many Linux distributions and macOS. It is an enhanced version of the original Bourne Shell (sh) and provides extensive features for interactive use and scripting.
    - It is widely used in system administration and as the default interactive shell for users.
    - Some of its features include
        - Command history and auto-completion.
        - Job control and background processing.
        - Shell scripting with support for conditional statements, loops, and functions.
2. **Zsh (Z Shell)**
    - Zsh is known for its user-friendly enhancements over Bash. It includes advanced features for interactive use and scripting and is designed to be more customizable.
    - It is popular among power users who appreciate its interactive features and enhanced scripting.
    - Some of its features include
        - Advanced tab completion with context-aware suggestions.
        - Theming and extensive customization options.
        - Improved scripting capabilities and associative arrays.
3. **Fish (Friendly Interactive SHell)**    
    - Fish is designed to be user-friendly and interactive. It features syntax highlighting, auto-suggestions, and a clean command-line interface.
    - It is suited for users who prioritize a friendly and intuitive command-line experience.
    - Some of its features include
        - Auto-suggestions based on command history.
        - Syntax highlighting for commands and errors.
        - Web-based configuration interface.
4. **Dash:**
    - Dash is a lightweight POSIX-compliant shell designed for efficiency. It aims to be faster than Bash and is often used in system scripts where speed is crucial.
    - It is frequently used in Debian-based systems for system scripts and as /bin/sh.
    - Some of its features include
        - Minimalistic design with focus on speed and simplicity.
        - POSIX-compliant scripting capabilities.
        - Suitable for non-interactive use and system scripts.
5. **Tcsh (Tenex C Shell)**
    - Tcsh is an enhanced version of the C shell (csh) with additional features for interactive use. It includes features like command-line editing and history.
    - It was historically used in interactive environments and by users familiar with C shell features.
    - Some of its features include
        - Command-line editing and history with arrow key support.
        - Spelling correction and directory stack management.
        - Customizable prompts and aliases.


> [!NOTE] Terminal Emulators - Suggestions List
> The following are some of the most commonly found *Terminal Emulators* in the Linux Land. 

Following are some of the reasons why a CLI is very important in the context of Linux

1. **Efficiency and Speed** - The CLI allows for quick and efficient interaction with the operating system. Once users become familiar with command syntax and shortcuts, they can perform tasks more rapidly than using graphical interfaces.
2. **Scripting and Automation** - The CLI enables automation of tasks through scripting. Shell scripts can be written to perform complex operations automatically, saving time and reducing the potential for human error.
3. **Remote Management** - Many Linux/Unix servers are managed remotely, often over a network connection. The CLI provides a lightweight and efficient means of interacting with remote systems, making it well-suited for server administration tasks.
4. **Resource Efficiency** - Command-line tools typically consume fewer system resources compared to their graphical counterparts. This can be particularly advantageous on systems with limited hardware resources or when managing multiple systems simultaneously.
5. **Flexibility and Customization** - The CLI offers a high degree of flexibility and customization. Users can combine commands and utilities in various ways to tailor their workflow and meet specific requirements.
6. **Access to Advanced Features** - Many advanced system administration and debugging features are only available through the command line. These include low-level system operations, network configuration, process management, and performance monitoring.
7. **Standardization and Portability** - The CLI provides a standardized interface across different Linux/Unix distributions, ensuring consistency in command behavior and syntax. This makes it easier to transition between different systems and distributions.

## Navigating the CLI

In a Linux//Unix system, the command line interface or CLI is fundamental for efficiently interacting with the system. Understanding the know-hows of the CLI is imperative for a smoother operation and productivity when using such systems.

In a CLI environment, users interact with the system by typing commands at the *prompt*, that usually displays the name of the user and the computer followed by a `$` or `#` symbol, so it looks something like `username@computername: $`. However, this is both variable across distributions as well as customizable. 

This prompt can take *text-based commands* and returns textual feedback in the form of output after being processed by the shell. These commands can be simple or complex, often combined with options and arguments to achieve specific tasks.

One essential feature of the CLI is Tab completion, which automatically completes commands, file names, and directory paths. By pressing the Tab key, users can save time and reduce typing errors. Tab completion suggests possible completions based on the entered characters, facilitating quick navigation and command entry.

Some important shortcuts enhance the usability of the CLI. For instance, pressing Ctrl + C interrupts the current command or process, while Ctrl + D sends an EOF signal, useful for logging out or exiting a shell. Ctrl + L clears the screen, providing a clean workspace, and Ctrl + Z suspends the current foreground process for later resumption or termination.

When navigating the file system in the CLI, several essential commands come into play. The `pwd` command, short for "Print Working Directory," displays the current working directory, indicating the user's current location within the file system. The `ls` command, standing for "List," lists the contents of a directory, with various options available for customizing the output. Additionally, the `cd` command, meaning "Change Directory," allows users to navigate between directories, offering flexibility in exploring and accessing different locations within the file system.

By mastering these basics, users can navigate the CLI confidently, efficiently executing commands and managing files and directories with ease. Whether performing routine tasks or more complex operations, understanding the fundamentals of CLI navigation is essential for effective system administration and development tasks.

Also speak about the streams

## Basic Linux Commands and Utilities


## Managing Users and Permissions