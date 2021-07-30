package me

type About struct {}
 
func (self *About) getCurrentWorkplace() string {
    return "#OpentToWork"
}

func (self *About) getHardSkills() []string {
    return []string{"PHP/Laravel", "Python/Django", "Golang", "Angular", "API REST/GraphQL", "Scrum/Jira", "Postgres/Mongo",}
}

func (self *About) getSoftSkills() []string {
    return []string{"Vuejs", "ReactJs", "Node/Express", "Wordpress", "Devops/Docker/Terraform", "firebase",}
}