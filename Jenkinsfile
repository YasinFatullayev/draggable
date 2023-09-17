pipeline {
    agent any
    
    tools {
        nodejs
    }
    
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                npm install
            }
        }
    }
}
