


const scriptsInEvents = {

	async EventSheet5_Event42_Act2(runtime, localVars)
	{
		        const dataAtual = new Date();
		        const hora = dataAtual.getHours();
		        const minutos = dataAtual.getMinutes();
		        const segundos = dataAtual.getSeconds();
		
		        const horaInoxidavel = hora + (minutos / 60) + (segundos / 3600);
		        const horaConvencional = horaInoxidavel * (60 / 62.5);
		        const minutosConvencionais = (horaConvencional - Math.floor(horaConvencional)) * 60;
		        const segundosConvencionais = (minutosConvencionais - Math.floor(minutosConvencionais)) * 60;
		
		        let horario;
		        if (Math.floor(hora) === 0) {
		          horario = `23:${Math.floor(minutosConvencionais + 2).toLocaleString('en-US', {
		            minimumIntegerDigits: 2,
		            useGrouping: false
		          })}`;
		        } else {
		          horario = `${Math.floor(horaConvencional).toLocaleString('en-US', {
		            minimumIntegerDigits: 2,
		            useGrouping: false
		          })}:${Math.floor(minutosConvencionais).toLocaleString('en-US', {
		            minimumIntegerDigits: 2,
		            useGrouping: false
		          })}`;
		        }
		
		runtime.globalVars["horarh"] = horario;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

