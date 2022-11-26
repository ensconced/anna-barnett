terraform {
  backend "s3" {
    bucket = "everything-server-terraform-state"
    key    = "state"
    region = "eu-west-1"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  profile = "personal"
  region  = "eu-west-1"
}


resource "aws_lightsail_instance" "everything-server" {
  name              = "everything-server"
  availability_zone = "eu-west-1c"
  blueprint_id      = "debian_11"
  bundle_id         = "nano_2_0"
  tags = {
    project = "everything-server"
  }
}
