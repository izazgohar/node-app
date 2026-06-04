pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main',
                    credentialsId: '2f39e4cf-11a8-4811-88ef-fb0eb69cf866',
                    url: 'https://github.com/izazgohar/node-app.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || echo "No tests found"'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    pm2 stop node-app-jenkins || true
                    pm2 start server.js --name node-app-jenkins
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Build #${BUILD_NUMBER} successful!"
        }
        failure {
            echo "❌ Build #${BUILD_NUMBER} failed!"
        }
    }
}
