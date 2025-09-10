// Test de conexión con Sanity
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: '2a5byq8s',
  dataset: 'production',
  apiVersion: '2023-03-20',
  useCdn: true,
});

async function testConnection() {
  try {
    console.log('🔍 Probando conexión con Sanity...');
    
    // Test básico de conexión
    const datasets = await client.fetch('*[_type == "project"]');
    console.log('✅ Conexión exitosa');
    console.log('📊 Proyectos encontrados:', datasets.length);
    console.log('📋 Datos:', JSON.stringify(datasets, null, 2));
    
  } catch (error) {
    console.error('❌ Error de conexión:', error);
  }
}

testConnection();
