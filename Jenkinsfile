pipeline {
    agent any

    tools {
        nodejs "Node18"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/sravani3377/project1.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t static-site:latest .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f static-site || true'
                sh 'docker run -d -p 3000:3000 --name static-site static-site:latest'
            }
        }
    }
}

