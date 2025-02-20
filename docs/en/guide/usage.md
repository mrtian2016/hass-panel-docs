# User Guide

## System Overview
This system is a visualization control panel based on Home Assistant, offering rich card components and an intuitive interface to help you manage smart home devices more conveniently. Main features include device status monitoring, smart control, automation management, and more.

## 1. Initialization
<!-- Image -->
![Home Assistant panel initialization page, including administrator account settings and Home Assistant connection configuration](/init_page.png)

On the initialization page, you need to fill in the following information:

1. **Administrator Username**: Set your administrator account username
2. **Administrator Password**: Set a secure administrator password
3. **Confirm Password**: Re-enter the administrator password for confirmation
4. **Home Assistant Address**: Enter your Home Assistant instance address
   - Format example: http://homeassistant.local:8123
   - Please ensure the address can correctly access your Home Assistant instance
5. **Home Assistant Token** (optional):
   - If your Home Assistant has enabled long-term access token authentication, enter it here
   - If not entered, you will be automatically redirected to the Home Assistant login page for authorization after successful login

After filling in all necessary information, click the "Initialize System" button to complete the setup. The system will create an administrator account using this information and redirect to the login page.

## 2. System Homepage

After successful login, you will enter the system homepage.
<!-- Image -->
![System Homepage](/home_empty.png)

There are six function buttons in the top left corner of the system homepage:

1. **Night Mode Toggle**: Click to switch between light and dark modes for comfortable nighttime use
2. **Internationalization**: Switch system display language, supporting multiple language interfaces
3. **Configuration**: Open the system configuration panel for system-related settings
4. **Edit**: Enter page edit mode to adjust card size and position
5. **Column Switch**: Adjust the number of columns displayed on the page to optimize layout
6. **Fullscreen**: Switch to fullscreen display mode for larger display space

## 3. System Configuration

You can adjust system-related settings in the system configuration panel.
<!-- Image -->
![System Configuration](/config_empty.png)

The configuration page provides the following features:

### Top Navigation Bar
There are three main buttons in the top right corner:
1. **Home**: Click to return to system homepage
2. **Global Configuration**: Open system global settings panel to configure system-level parameters
3. **Configuration Management**: For importing/exporting system configurations, convenient for backup and migration

### Add Card
- There is an **Add Card** button (+) in the bottom right corner to add new cards to the page

### Version Information
At the bottom of the page:
- Current version number
- **Check Update** button: Click to check if there's a new system version
- **Manual Update** button: Upload update package manually
- System-related links: Request help, close, etc.
- GitHub repository link: Access project source code

## 4. Adding Cards
![Card addition interface, showing available card types list and configuration options](/add_card.png)

There is an **Add Card** button (+) in the bottom right corner to add new cards to the page.
On the add card page, you can select the card type and configure the card.

### Card Types
The system provides various types of cards to choose from:

1. **Information Display**
   - **Time**: Display current time information
   - **Weather**: Display weather forecast information
   - **Sensor**: Display various sensor data
   - **Power Monitoring**: Monitor device power consumption

2. **Lighting Control**
   - **Light Status**: Display and control individual lighting devices
   - **Light Overview**: Visualize whole-house lighting status
   - **Light Sensor**: Monitor ambient light levels

3. **Smart Appliances**
   - **AC Control**: Control air conditioner temperature and mode
   - **Curtain Control**: Control smart curtains
   - **Water Purifier**: Display water purifier status and control
   - **Socket Status**: Control smart sockets

4. **Security Monitoring**
   - **Surveillance**: Display camera monitoring feed
   - **Motion Sensor**: Detect human activity
   - **Router Monitoring**: Display router-related information
   - **NAS Monitoring**: Monitor network storage device status

5. **Entertainment System**
   - **Media Player**: Control audio/video playback devices
   - **Media Player (Large)**: Larger size media control interface

6. **Automation**
   - **Quick Commands**: Execute preset automation commands

### Usage Method
1. Click the add button (+) in the bottom right corner to open the add card page
2. Select the desired card type from the card list
3. Configure the parameters according to the selected card type
4. After configuration, the card will be added to the main page
5. Adjust card size and position through edit mode

## 5. Card Configuration
You can configure cards in detail when adding or editing them. Taking the light status card as an example:
<!-- Image -->
![Card Configuration](/card_edit.png)

### Configuration Items
1. **Card Title**
   - Set the card title displayed on the page
   - Can be customized according to device purpose or location, such as "Living Room Light", "Master Bedroom Lamp", etc.

2. **Device Configuration**
   - **Light Name**: Enter the name of the light to control
   - **Select Entity ID**: Choose the light entity ID to control
   - **Icon**: Select the icon displayed for the device
     - System provides a rich icon library
     - Choose icons that best match device characteristics, such as floor lamp, chandelier, etc.

### Operation Buttons
- **Add**: Add more devices to the current card
- **Move Up/Down**: Adjust display order of multiple devices
- **Delete**: Remove unwanted devices

### Save Settings
- **Cancel**: Discard current modifications and return
- **Save**: Confirm configuration and save changes

### Usage Tips
1. Device names should be easily identifiable, such as naming by room or function
2. Multiple related devices can be added to one card for centralized control
3. Use up/down movement to place frequently used devices at the front
4. After configuration, adjust card size and position in homepage edit mode

## 6. Card Management
You can manage cards in the configuration page.
<!-- Image -->
![Card Management](/config.png)

### Card List
Each card contains:
1. **Card Icon and Name**: Visually display card type and title
2. **Display Control**
   - **Show Title**: Control whether to display card title on homepage
   - **Show Card**: Control whether to display the card on homepage

### Card Operations
Each card has two operation buttons on the right:
1. **Edit**: Click pencil icon to enter card configuration page for detailed settings
2. **Delete**: Click trash bin icon to delete the card

### Add New Card
- Click **Add** button (+) in bottom right corner to add new cards
- Click **Save** button (✓) in bottom right corner to save all current changes

### Usage Tips
1. Optimize interface layout by showing/hiding titles
2. Temporarily hide infrequently used cards instead of deleting
3. Save promptly after batch modifications
4. Confirm before deletion, as deleted cards need to be re-added and configured

## 7. Homepage Editing
You can edit the homepage in edit mode.
<!-- Image -->
![Homepage Edit](/home.png)

### Top Toolbar
A group of function buttons is provided on the top right:
1. **Night Mode**: Switch between dark/light themes
2. **Language Switch**: Switch interface language
3. **System Settings**: Enter system configuration page
4. **Reset Layout**: Reset all cards to default layout
5. **Save**: Save current layout changes
6. **Column Adjustment**: Adjust display columns (with number markers)
7. **Fullscreen**: Switch to fullscreen display mode

### Card Operations
In edit mode, you can perform the following operations on cards:
1. **Move Position**: Directly drag card to target position
2. **Adjust Size**: Drag card bottom right corner to adjust size
3. **View Data**: Cards display device status and data in real-time
   - For example, weather card shows: feels like temperature, humidity, visibility, air quality, wind conditions, etc.
   - Light status card shows: device on/off status, brightness, etc.

### Layout Suggestions
1. **Reasonable Grouping**:
   - Place related cards in close proximity
   - Put frequently used cards in visual focus areas

2. **Size Adjustment**:
   - Enlarge cards with important information
   - Use larger sizes for cards with high information density

3. **Column Selection**:
   - Choose appropriate column count based on screen size and number of cards
   - Optimize display effect through column adjustment

### Usage Tips
1. Save layout changes regularly to avoid accidental loss
2. Use reset layout to restore default layout
3. Consider device usage frequency and importance when adjusting layout
4. Use fullscreen mode for larger display space

## 8. Global Configuration
You can adjust system-related settings in the global configuration page.
<!-- Image -->
![Global Configuration](/global_config.png)

### Background Settings
1. **Background Image**
   - Support adding custom background image via URL
   - Provide "Upload" button for direct local image upload
   - "Reset" button to restore default background

2. **Background Image Description**
   - Enter background image URL address
   - Support web image links
   - Recommend using HD images for better display effect

### System Update
1. **Beta Version Update**
   - Control whether to receive Beta version updates via switch
   - Will receive test version update pushes when enabled
   - Recommended to use this feature in test environment

### Operation Buttons
- **Reset All**: Restore all configurations to default state
- **Re-initialize**: Perform system initialization settings again (will clear user and configured Home Assistant address and Token, but preserve cards)
- **Cancel**: Discard current modifications and return
- **Save**: Confirm and save current configuration changes

### Usage Recommendations
1. Pay attention to image size when changing background image, as large sizes may affect loading speed
2. Beta versions may have instability, please enable with caution
3. Test important modifications before saving to confirm effects



