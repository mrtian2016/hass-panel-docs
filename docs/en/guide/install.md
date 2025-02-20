# Installation Guide

Hass-Panel offers multiple installation methods. You can choose the most suitable method based on your needs.

## Installation Methods

### 1. Docker Installation (Recommended)

Use the following command to start Hass-Panel:

```bash
docker run \
  --name hass-panel \
  --restart unless-stopped \
  -p 5123:5123 \
  -v ./data/:/config/hass-panel \
  -d \
  ghcr.io/mrtian2016/hass-panel:latest
```

This command will:
- Create a container named `hass-panel`
- Set the container to restart automatically
- Map container port 5123 to host port 5123
- Save configuration files in the host's `./data/` directory
- Use the latest version of the Hass-Panel image

### 2. Home Assistant Add-on Installation

#### Method 1: One-Click Installation (Recommended)

Click the button below to add Hass-Panel to your Home Assistant:

[![Add to Home Assistant](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fmrtian2016%2Fhass-panel)

#### Method 2: Manual Installation

1. In the Home Assistant sidebar, click "Settings" -> "Add-ons" -> "Add-on Store"
2. Click the three dots in the top right corner and select "Repositories"
3. Add the repository URL: `https://github.com/mrtian2016/hass-panel`
4. Click "Add" and refresh the page
5. Find and install "Hass Panel" in the Add-on Store
6. After starting, you can access it from the sidebar

## Upgrade Instructions

### Docker Version Upgrade

```bash
# Pull the latest image
docker pull ghcr.io/mrtian2016/hass-panel:latest

# Stop and remove the old container
docker stop hass-panel
docker rm hass-panel

# Create a new container with the latest image
docker run \
  --name hass-panel \
  --restart unless-stopped \
  -p 5123:5123 \
  -v ./data/:/config/hass-panel \
  -d \
  ghcr.io/mrtian2016/hass-panel:latest
```

### Home Assistant Add-on Version Upgrade

1. Find Hass Panel in the Home Assistant Add-on Store
2. Click the "Update" button
3. Wait for the update to complete and restart the add-on
