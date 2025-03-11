# Installation Guide

Hass-Panel offers multiple installation methods. You can choose the most suitable method based on your needs.

## Installation Methods

### 1. Home Assistant Add-on Installation (Recommended)

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

### 2. Docker Installation

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
- Access address: http://your-docker-host:5123

### 3. Docker Compose Installation

If you prefer using Docker Compose to manage containers, follow these steps:

1. Create a `docker-compose.yml` file with the following content:

```yaml
version: '3'
services:
  hass-panel:
    container_name: hass-panel
    image: ghcr.io/mrtian2016/hass-panel:latest
    restart: unless-stopped
    ports:
      - "5123:5123"
    volumes:
      - ./data:/config/hass-panel
```

2. Run the following command in the directory containing the `docker-compose.yml` file to start the service:

```bash
docker-compose up -d
```

This will create and start the Hass-Panel container with the same configuration as the Docker installation method.
- Access address: http://your-docker-host:5123

## Upgrade Instructions

### Home Assistant Add-on Version Upgrade

1. Find Hass Panel in the Home Assistant Add-on Store
2. Click the "Update" button
3. Wait for the update to complete and restart the add-on

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

### Docker Compose Version Upgrade

Run the following commands in the directory containing the `docker-compose.yml` file to upgrade the service:

```bash
# Pull the latest image and recreate the container
docker-compose pull
docker-compose up -d
```
