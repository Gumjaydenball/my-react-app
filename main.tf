terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>4.0"
    }
  }
}

provider "azurerm" {
  features {}

  subscription_id = "7b54d9f7-ca7a-4ae2-91f4-071e05231042"
}

resource "azurerm_resource_group" "main" {
  name     = "rg-static-web-app"
  location = "East US 2"
}

resource "azurerm_static_web_app" "main" {
  name                = "my-static-web-app"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  sku_tier            = "Free"
  sku_size            = "Free"
}

output "static_web_app_name" {
  value = azurerm_static_web_app.main.name
}

output "static_web_app_url" {
  value = azurerm_static_web_app.main.default_host_name
}

output "static_web_app_id" {
  value = azurerm_static_web_app.main.id
}

output "deployment_token" {
  value     = azurerm_static_web_app.main.api_key
  sensitive = true
}
