const url = 'https://replicate.com/api/models/stability-ai/sdxl/versions/39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b/predictions';
const axios = require('axios');
const cookies = {};

const imagine = async (prompt, stream = false) => {
    const data = {"input":{"width":768,"height":768,"prompt":prompt,"refine":"expert_ensemble_refiner","scheduler":"K_EULER","lora_scale":0.6,"num_outputs":1,"guidance_scale":7.5,"apply_watermark":false,"high_noise_frac":0.8,"negative_prompt":"","prompt_strength":0.8,"num_inference_steps":25},"stream":stream}

    let response = await axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log('Task Created: ', response.data.id);
    let status = '';
    while (status !== 'succeeded') {
        let ndata = await axios.get(`https://replicate.com/api/predictions/${response.data.id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        status = ndata.data.status;
        if (status === 'succeeded') {
            return {...ndata.data, final_result: ndata.data.output.join('')};
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before checking status again
    }
};

// imagine('among us impostor but good').then(data => {
//     console.log(data);
// });

module.exports = {
    imagine
}
