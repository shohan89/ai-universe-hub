const loadAIData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const tools = data.data.tools;
    displayAiTools(tools);
}
// display the data on the ui
const displayAiTools = tools => {
    const toolsContainer = document.getElementById('tools-card-container');
    // data still loading here...
    toggleSpinner(true);
    tools.forEach((tool)=>{
        const toolDiv = document.createElement('div');
        toolDiv.classList = 'card bg-base-100 shadow-sm';
        toolDiv.innerHTML = `
        <figure>
            <img
              src="${tool.image}"
              alt="${tool.name}"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${tool.name}</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div class="card-actions justify-start">
              <button class="btn btn-primary">Show Details</button>
            </div>
          </div>
        `;
        toolsContainer.appendChild(toolDiv);
    })
    // data loaded, hide loading spinner
    toggleSpinner(false);
    
}
// Show & hide loading spinner before data is loaded and hide after data is loaded
const toggleSpinner = isLoading =>{
  const spinner = document.getElementById('loading-spinner');
  if(isLoading){
    spinner.classList.remove('hidden');
  }
  else{
    spinner.classList.add('hidden');
  }
}
loadAIData();

