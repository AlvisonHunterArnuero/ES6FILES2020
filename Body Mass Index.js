// This routine calculates the Body Mass Index based on user input of weight in pounds and height in meters

const fnCalculateBMI = () => {
      let logout = "n";
     let   weight = 0;
       let height = 0;
       let name = "";
       let pndTOkg= 0.453592;
    let BMIgrades = "";
            let BMI = 0;
   console.log("░░░░░░░░░░░░░░░░ Body Mass Index Calculator ░░░░░░░░░░░░░░░");
         name = input("Please provide us with your name: ")
        weight = float(input("Enter your weight [pounds] "))
        height = float(input("Enter your height [meters] "))
  BMI = (weight*pndskg)/ (height*height);


};
 fnRandomString(6);


    while logout != "y":




            if BMI < 18.5:
                BMIgrades = "Underweight"
                console.log('≡'*80);
                console.log("Hello {name}: \nPlease find below your BMI results based on the provided information:");
                console.log("BODY MASS INDEX:  {:.2f} \nBMI GRADE:   {} ".format(BMI, BMIgrades));
                console.log('≡'*80);
            elif BMI >= 18.5 and BMI < 25.0:
                BMIgrades = "Normal weight"
                console.log('≡'*80);
                console.log("Hello {name}: \nPlease find below your BMI results based on the provided information:");
                console.log("BODY MASS INDEX:  {:.2f} \nBMI GRADE:   {} ".format(BMI, BMIgrades));
                console.log('≡'*80);
            elif BMI >= 25.0 and BMI < 30.0:
                BMIgrades = "Overweight"
                console.log('≡'*80);
                console.log("Hello {name}: \nPlease find below your BMI results based on the provided information:");
                console.log("BODY MASS INDEX:  {:.2f} \nBMI GRADE:   {} ".format(BMI, BMIgrades));
                console.log('≡'*80);
            else:
                BMIgrades = "Obesity"
                console.log('≡'*80);
                console.log("Hello {name}: \nPlease find below your BMI results based on the provided information:");
                console.log("BODY MASS INDEX:  {:.2f} \nBMI GRADE:   {} ".format(BMI, BMIgrades));
                console.log("COVID-19: \nSevere Obesity (a BMI of 30 or Higher) May Raise Risk of Severe Illness.");
                console.log('≡'*80);

            logout = input("Exit this program? [y/n]: ")
            if logout == "y" or logout == "Y":
                    console.log('Program has ended. Thank you for using our products.')
                    console.log("░░░░░░░░░░░░░░░░ Powered by Alvison Hunter - April 2020 ░░░░░░░░░░░░░░░")
            break

        else:
            break


