pipeline {
    agent any
    
    tools {
        node "node"
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
